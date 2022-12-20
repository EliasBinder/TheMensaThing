import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

import Auth from "./Auth";
import AzureInstance from "./AzureInstance";

export default class AzureLoginView extends Component {

  private auth: Auth;

  constructor(props: {
    loadoingMessage:string,
    onSuccess: () => void,
    onCancel: () => void,
    onError: () => void,
    azureInstance: AzureInstance,
    style: StyleSheet
  }) {
    super(props);

    const {
      loadoingMessage,
      onSuccess,
      onCancel,
      onError,
      azureInstance,
      style
    } = props;

    this.auth = new Auth(azureInstance);
    this.state = {
      visible: true,
      cancelled: false,
    };

    this._handleTokenRequest = this._handleTokenRequest.bind(this);
    this._renderLoadingView = this._renderLoadingView.bind(this);
  }

  async _fetchAuthCode(authCode) {
    let token = null;
    let error = { failed: false, error: null };
    try {
      token = await this.auth.getTokenFromCode(authCode);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      error = { failed: true, error: err };
    }
    return [token, error];
  }

  async _handleTokenRequest(e) {
    // get code when url changes

    let code = /((\?|\&)code\=)[^\&]+/.exec(e.url);

    if (code !== null) {
      code = String(code[0]).replace(/(\?|\&)?code\=/, "");
      this.setState({ visible: false });

      // request for the authorization token
      const [token, error] = await this._fetchAuthCode(code);
      if (error.failed) {
        throw new Error(error.error);
      }

      // set token to instance
      this.props.azureInstance.setToken(token);
      // call success handler
      this.props.onSuccess();
    }

    // if user cancels the process before finishing
    if (
      !this.state.cancelled &&
      this.props.onCancel &&
      e.url.indexOf("error=access_denied") > -1
    ) {
      this.setState({ cancelled: true, visible: false });

      // call cancel handler
      this.props.onCancel();
    }
  }

  _renderLoadingView() {
    return this.props.loadingView === undefined ? (
      <View
        style={[
          this.props.style,
          styles.loadingView,
          {
            flex: 1,
            alignSelf: "stretch",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          },
        ]}
      >
        <Text>{this.props.loadingMessage}</Text>
      </View>
    ) : (
      this.props.loadingView
    );
  }

  render() {
    let js = `document.getElementsByTagName('body')[0].style.height = '${
      Dimensions.get("window").height
    }px';`;
    return this.state.visible ? (
      <WebView
        automaticallyAdjustContentInsets={true}
        useWebKit={true}
        style={[
          this.props.style,
          styles.webView,
          {
            flex: 1,
            alignSelf: "stretch",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          },
        ]}
        source={{ uri: this.auth.getAuthUrl() }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        javaScriptEnabledAndroid={true}
        onNavigationStateChange={this._handleTokenRequest}
        onShouldStartLoadWithRequest={(e) => {
          return true;
        }}
        startInLoadingState={true}
        onMessage={(e) => {
          const { data } = e.nativeEvent;
            if (data.hasOwnProperty("username")) {
              console.log("setting user name: " + data.username);
              this._setUsername(data.username);
            }
        }}
        injectedJavaScript={js}
        scalesPageToFit={true}
      />
    ) : (
      this._renderLoadingView()
    );
  }
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
