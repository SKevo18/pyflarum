from datetime import datetime

def flarum_to_datetime(flarum_dt: str) -> datetime:
    """
        Converts Flarum's datetime string to Python's datetime object.
        Doesn't convert if the parameter is already a datetime object.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if type(flarum_dt) == datetime:
        return flarum_dt

    return datetime.strptime(flarum_dt, '%Y-%m-%dT%H:%M:%S%z')


def datetime_to_flarum(dt: datetime) -> str:
    """
        Converts Python's datetime object to Flarum's datetime string.
        Doesn't convert if the parameter is already a string.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if type(dt) == str:
        return dt

    return dt.strftime('%Y-%m-%dT%H:%M:%S%z')
