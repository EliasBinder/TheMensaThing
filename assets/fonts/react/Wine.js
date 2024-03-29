import React from 'react';
export const Wine = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`svgtofont ${props.className ? props.className : ''}`}><path d="M16 42v-3h6.5v-9.25q-4.95-.7-7.725-3.975Q12 22.5 12 18V6h24v12q0 4.5-2.775 7.775Q30.45 29.05 25.5 29.75V39H32v3Zm8-15q3.45 0 6.025-2.375T32.9 19.5H15.1q.25 2.75 2.85 5.125T24 27Zm-9-10.5h18V9H15ZM24 27Z" fillRule="evenodd" /></svg>
);
