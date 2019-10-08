const withError = (actionType) => {
  return (payload) => {
    return {
      type: `${actionType}_ERROR`,
      ...payload,
    };
  };
};

const withSuccess = (actionType) => {
  return (payload) => {
    return {
      type: `${actionType}_SUCCESS`,
      ...payload,
    };
  };
};

export const withSuccessError = (actionType) => {
  const actionError = withError(actionType);
  const actionSuccess = withSuccess(actionType);

  return { actionError, actionSuccess };
};
