Module pyflarum.datetime_conversions
====================================

Functions
---------

    
`datetime_to_flarum(dt: Optional[ForwardRef('datetime | str')] = None)`
:   Converts Python's datetime object to Flarum's datetime string.
    Doesn't convert if the parameter is already a string.
    
    Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`

    
`flarum_to_datetime(flarum_dt: Optional[ForwardRef('str | datetime')] = None)`
:   Converts Flarum's datetime string to Python's datetime object.
    Doesn't convert if the parameter is already a datetime object.
    
    Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`