Module pyflarum.flarum.core.filters
===================================

Classes
-------

`Filter(order_by: Optional[Literal['commentCount', '-commentCount', 'createdAt', '-createdAt']] = None, query: Optional[str] = None, ids: Optional[Iterable[ForwardRef('str | int')]] = None, limit: int = 20, page: Optional[int] = None, include: Optional[list] = None, additional_data: Optional[dict] = None)`
:   Represents a Flarum API filter as a `dict`.
    
    It allows you to filter discussions without having to manually specify URL parameters.
    
    - `order_by` - gets passed into `?sort=` parameter. Common values are `commentCount`, `createdAt` and their reverse/negated values (prefixed with `-`)
    - `query` - the search query, passed into `?filter[q]=`. This can be a string. Flarum search bar uses this. Gambits such as `author:username` are supported.
    - `ids` - fetches entries with specific ids, passed into `?filter[id]=`. This is a list, that is then converted into comma separated string.
    - `limit` - limit of entires to fetch. Flarum (by default) allows a max. of 50 entries to be fetched at once. Passed into `?page[limit]=`
    - `page` - fetch a specific page of entires. This is actually an offset - which is determined by multiplying `page` with `limit` (see above).
    - `include` - include specific entries. See [included data](https://cwkevo.github.io/pyflarum/docs/#included-data). You will likely never use this.
    - `additional_data` - this is a `dict` (`parameter: value`) of additional search parameters that you might want to use. This can be used to overwrite previous filters.

    ### Instance variables

    `to_dict: dict`
    :   Converts the filter to a `dict`, so that
        it can be sent to the API (`requests` module, see ["Passing parameters in URLs"](https://docs.python-requests.org/en/master/user/quickstart/#passing-parameters-in-urls)).
        
        An extension might add additional filter data after the filter was initialized
        (for example: `absolutely_all` needs to update page number to continuously yield results).