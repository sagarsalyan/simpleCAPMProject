# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


## Steps to create CAPM + SQLite
1 - Test whether development environment is ready or not
    Run the command - npx check-sap-cloud-readiness -codejam-cap
    CF CLI - OK
    CDS Dev Kit - OK
    CF CLI - MultiApps - OK
    Make - OK
    SQLite - OK

2 - Create a project directory
    Run the command - mkdir <foldername>

3 - Go into folder
    Command - cd <foldername>

4 - Initialize CDS project
    Command - cds init
    Check package.json for devDependencies - "sqlite3"-"^5" -- this required for SQLite Database
    Check package.json for dependencies - "@sap/cds": "^4" & "express": "^4"
    Also command 'cds' to see all possible commands
    
5 - Install all dependencies
    Command - npm install

6 - Create Database
    Create a file in 'db' folder, name it 'datamodel.cds'. Here we define the entity and its structure -- for code check the file
    Run command 'cds deploy --to sqlite' -- this will generate a database and table is created as per the defined structure

7 - Create Database connection
    Get the project directory path(command 'pwd') + database name --e.g. /home/user/projects/capmproject/db.sqlite
    Select "SQL Tools" (Database Icon) from the tool list
    In SQL Tools Setting, select 'SQLite(Node Native)' and fill as follow
        Connection Name - MyDBAccess
        Database File - full path of database (above selected path - --e.g. /home/user/projects/capmproject/db.sqlite)
    Click 'Test Connection'
    Click 'Save Connection'
    Now you can see connection detail and table detail in 'CONNECTIONS' tab under SQL Tools Setting

8 - Loading data from Excel to Database table
    Create CSV file in Excelsheet with data( maintain same column name as entity structure)
    Create folder in db folder; folder name 'csv'
    Drag and drop excel into 'csv' directory
    If the excel file name is <namespace_name-entity_name> then while sqlite deploy, the excel data will automatically injected to corresponding database table. In our case 'capmproject.db-orders.csv'
    Run command 'cds deploy --to sqlite:db.sqlite'

9 - Create Odata Service
    Create a file 'myservice.cds' inside 'srv' directory -- for code check the file
    Run command 'cds deploy --to sqlite' -- this will create views for the services as defined, check 'Views' in 'CONNECTIONS' tab under SQL Tools Setings

10 - Run the project
    Command - cds run

11 - Smart table does not work with oData v4 - need OData V2 Adapter Proxy to downgrade the OData V4 model to V2
    Install @cap-js-community/odata-v2-adapter 
    Run command - npm i @cap-js-community/odata-v2-adapter
    In package.json add
             "cds": {
                "cov2ap": {
                "plugin": true
                }
            }
    Change URI od dataService in manifest as per the v2 Odata Service
    e.g.  "uri": "/odata/v2/sap/opu/odata/sap/API_TEACHERS_DATA/",

12 - To add profile add below code in 'cds' in package.json
        "cds": {
            "[sqlite]":{
            "requires":{
                "db":{
                "kind":"sqlite"
                }
            }
            }
        }
    This way we can add multiple profile like 'postgres', 'hana' to use those databases
13 - To generate artifacts, run below command
    cds build or 
    cds build --profile sqlite   --> if profile added in the package.json
    This will generate 'gen' folder 

## To include POSTGRES database

1 - To add POSTGRES, add below code under 'cds' section of package.json
    "cds": {
        "[postgres]": {
            "requires": {
                "db": {
                "kind": "postgres"
                }
            }
        },
    }
2 - Run below command to generate artifacts
    cds build --profile postgres
    This will generate 'gen' folder, inside it 'pg' and 'srv'









