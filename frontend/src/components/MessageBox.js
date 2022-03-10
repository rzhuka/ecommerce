import React from 'react';

export const MessageBox = ({error, variant}) => {
  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {error}
    </div>
  );
}