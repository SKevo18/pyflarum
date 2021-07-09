from typing import Optional, List, Dict, NoReturn


class FlarumError(Exception):
    """
        Generic class for all Flarum related errors.
    """

    def __init__(self, message: Optional[str]=None, status: Optional[int]=None, code: Optional[str]=None, details: Optional[str]=None):
        self.status = status
        self.code = code
        self.details = details

        return super().__init__(message)


def handle_errors(errors: Optional[List[Dict[str, str]]]=None, status_code: Optional[str]=None) -> NoReturn:
    """
        Handles Flarum & request related errors. Should be called only when errors actually exist.
    """

    if not errors:
        return FlarumError(f'Request related error: {status_code}')
    
    else:
        for error in errors:
            if status_code:
                status = status_code

            else:
                status = int(error.get('status', None))

            code = error.get('code', 0)
            details = error.get("detail", "No further details.")


            if status == 400:
                if code == 'invalid_parameter':
                    raise FlarumError(f'Error {status}: Invalid parameter. This usually happens when you provide an invalid filter when filtering data. {details}', status=status, code=code, details=details)

                else:
                    raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)


            if status == 401:
                if code == 'not_authenticated':
                    raise FlarumError(f'Error {status}: Not authenticated. Please, check whether your authentication details (username & password) are correct and try again. {details}', status=status, code=code, details=details)

                else:
                    raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)

            raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)
