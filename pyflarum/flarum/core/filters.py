from typing import Optional


class DiscussionFilter(dict):
    def __init__(self, query: Optional[str]=None, limit: Optional[int]=3, include: Optional[str]="mostRelevantPost"):
        __data = dict()

        if query:
            __data["filter[q]"] = query
        if limit:
            __data["page[limit]"] = limit
        if include:
            __data["include"] = include

        return super().__init__(__data)