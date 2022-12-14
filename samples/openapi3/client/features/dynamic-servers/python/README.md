# dynamic-servers
This specification shows how to use dynamic servers.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python >=3.6

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import dynamic_servers
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import dynamic_servers
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
import dynamic_servers
from pprint import pprint
from dynamic_servers.api import usage_api
# Defining the host is optional and defaults to http://petstore.swagger.io:80/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = dynamic_servers.Configuration(
    host = "http://petstore.swagger.io:80/v2"
)



# Enter a context with an instance of the API client
with dynamic_servers.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = usage_api.UsageApi(api_client)
    
    try:
        # Use custom server
        api_response = api_instance.custom_server()
        pprint(api_response)
    except dynamic_servers.ApiException as e:
        print("Exception when calling UsageApi->custom_server: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *http://petstore.swagger.io:80/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UsageApi* | [**custom_server**](docs/UsageApi.md#custom_server) | **GET** /custom | Use custom server
*UsageApi* | [**default_server**](docs/UsageApi.md#default_server) | **GET** /default | Use default server


## Documentation For Models



## Documentation For Authorization

 All endpoints do not require authorization.

## Author




## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in dynamic_servers.apis and dynamic_servers.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from dynamic_servers.api.default_api import DefaultApi`
- `from dynamic_servers.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import dynamic_servers
from dynamic_servers.apis import *
from dynamic_servers.models import *
```

