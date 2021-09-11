import typing as t

from datetime import datetime


def flarum_to_datetime(flarum_dt: 't.Optional[t.Union[str, datetime]]'=None) -> t.Union[datetime, None]:
    """
        Converts Flarum's datetime string to Python's datetime object.
        Doesn't convert if the parameter is already a datetime object.
        
        Flarum's datetime format is: `%Y-%m-%dT%H:%M:%S%z`
    """

    if flarum_dt is None:
        return None

    elif isinstance(flarum_dt, datetime):
        return flarum_dt

    else:
        return datetime.strptime(flarum_dt, r'%Y-%m-%dT%H:%M:%S%z') # type: datetime


def datetime_to_flarum(dt: 't.Optional[t.Union[datetime, str]]'=None) -> t.Union[str, None]:
    """
        Converts Python's datetime object to Flarum's datetime string.
        Doesn't convert if the parameter is already a string.
        
        Flarum's datetime format is: `%Y-%m-%dT%H:%M:%S%z`
    """

    if dt is None:
        return None

    elif isinstance(dt, str):
        return dt

    else:
        return dt.strftime(r'%Y-%m-%dT%H:%M:%S%z') # type: str
