# Animal Funk [Login/Signup Page]

### Prerequisites :

1. Python 3
2. An Editor(Vscode/Pycharm ...)

### Installation

#### Make a virtual Environment

```bash
python -m venv env_name
```

#### Activating the Environment

```bash
source env_name/bin/activate
```

#### Installing required packages

```pip
pip install -r requirements.txt
```

#### Making a Database

Start Python IDLE

```bash
python
```

In the python IDLE

```python
from app import db
db.create_all()
```

#### Running the server

Enter the project folder and run (should be in the environment)

```bash
flask run
```

#### Deactivating the Environment

```bash
deactivate
```
