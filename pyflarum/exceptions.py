class FlarumError(Exception):
    """
        Base exception for Flarum response errors.
    """

    pass

class FlarumPermissionError(FlarumError):
    """
        Gets raised when you don't have permission to perform a certain forum action.
    """

    pass

class FlarumUnauthenticatedError(FlarumError):
    """
        This exception is raised when the Flarum user is not authenticated
        and tries to perform authenticated-only operation (such as creating a discussion).
    """

    pass