from typing import Literal, Optional, Union, List, Dict, NoReturn


class FlarumError(Exception):
    """
        Generic class for all Flarum related errors.
    """

    def __init__(self, message: Optional[str]=None, status: Optional[int]=None, code: Optional[str]=None, details: Optional[str]=None, *args, **kwargs):
        self.status = status
        self.code = code
        self.details = details

        return super().__init__(message)


def handle_errors(errors: List[Dict[str, str]]=[{}], status_code: str=None) -> Union[Literal[False], NoReturn]:
    for error in errors:
        if status_code:
            status = status_code

        else:
            status = int(error.get('status', None))

        code = error.get('code', None)
        details = error.get("detail", "No further details.")


        if status == 400:
            if code == 'invalid_parameter':
                raise FlarumError(f'Error 400: Invalid parameter. This usually happens when you provide an invalid filter when filtering data. {details}', status=status, code=code, details=details)

            elif code == 'csrf_token_mismatch':
                raise FlarumError(f'Error 400: CSRF token mismatch. This usually happens when performing a login only operation when unauthenticated. Are you authenticated? {details}', status=status, code=code, details=details)

            else:
                raise FlarumError(f'Error 400: Unknown generic error. {details}', status=status, code=code, details=details)


        if status == 401:
            if code == 'not_authenticated':
                raise FlarumError(f'Error 401: Not authenticated. Please, check whether your authentication details (username & password) are correct and try again. {details}', status=status, code=code, details=details)

            else:
                raise FlarumError(f'Error 401: Unknown generic error. {details}', status=status, code=code, details=details)


        if status == 404:
            if code == 'not_found':
                raise FlarumError(f'Error 404: Requested resource was not found. {details}', status=status, code=code, details=details)

            else:
                raise FlarumError(f'Error 404: Unknown generic error. {details}', status=status, code=code, details=details)


        elif status == 405:
            raise FlarumError(f'Error 405: Method not allowed. {details}', status=status, code=code, details=details)


        elif status == 422:
            raise FlarumError(f'Error 422: Validation error. {details}', status=status, code=code, details=details)


        elif status == 429:
            raise FlarumError(f'Error 429: Rate limited: You are being rate limited, please try again later. {details}', status=status, code=code, details=details)


        elif status == 500:
            raise FlarumError(f'Error 500: Unknown internal server error occurred. {details}', status=status, code=code, details=details)


        else:
            raise FlarumError(f'Unknown error: {status}, {code}, {details}', status=status, code=code, details=details)