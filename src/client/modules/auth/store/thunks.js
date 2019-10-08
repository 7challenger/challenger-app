import axios from 'axios';

import { loginSuccess, loginError } from './actions';

const validateCreds = (creds) => {
  if (Object.values(creds).filter(Boolean).length !== 2) {
    return { error: 'Wrong creds', validatedCreds: creds };
  }

  return { validatedCreds: creds, error: null };
};

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export const getFetchThunk = ({ onErrorValidation, onSuccessFetch, onErrorFetch }) => {
  let cancel = null;

  const onFetch = ({
    fetchFn,

    url,
    data,

    validateData,
    validateResponse,

    preprocessData,
    preprocessResponse,
  }) => {
    return async (dispatch, getState) => {
      const { error: dataValidationError } = validateData(data, getState);

      if (dataValidationError) {
        dispatch(onErrorValidation(dataValidationError));
        return;
      }

      const preprocessedData = preprocessData(data);

      const response = await fetchFn({
        url,
        data: preprocessedData,
        cancelToken: new axios.CancelToken((c) => { cancel = c; }),
      });

      const { error: responseValidationError } = validateResponse(response, getState);

      if (responseValidationError) {
        dispatch(onErrorFetch(responseValidationError));
        return;
      }

      const preprocessedResponse = preprocessResponse(response);

      dispatch(onSuccessFetch(preprocessedResponse));
    };
  };

  const onCancel = () => {
    if (cancel) {
      cancel();
      cancel = null;
    }
  };

  const getIsCanceled = () => {
    return !!cancel;
  };

  return { onFetch, onCancel, getIsCanceled };
};

export const loginThunk = (creds) => {
  return async (dispatch) => {
    const { validatedCreds, error } = validateCreds(creds);

    if (error) {
      dispatch(loginError({ error }));
      return;
    }

    await delay(1000);
    dispatch(loginSuccess(validatedCreds));
  };
};
