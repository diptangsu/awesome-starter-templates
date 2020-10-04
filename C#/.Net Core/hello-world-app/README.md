# .Net Core
.Net Core implementation of hello-world-app using .Net Core MVC.

## Folder structure
```
.
hello-world-app
├── hello-world-app
│	├── Controllers
│	├── Models
│	└── Views
├── README.md
└── hello-world-app.sln (C# Solution)

```

### **Prerequisites**
  - [Visual Studio code](https://code.visualstudio.com/download) 1.18 or higher
  - [.Net core SDK](https://www.microsoft.com/net/download/windows) 3.1 or higher

### **Setup & Running the node**

  - To build the application, go to the root directory[hello-world-app] and execute the following command.
  ```
	dotnet build 
  ```
  - To run the application, please build the application and then execute the following command
  ```
	dotnet run --project .\hello-world-app
  ```
  *Execute the commands in the root directory.[hello-world-app]

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://localhost:5000
```
Or, click [here](http://localhost:5000) to do the same.

## URLs/Endpoints of each project

#### hello-world-app
Method | Url | Description | Response | Error
--- | --- | --- | --- | ---
GET | `/hello` | Display **Hello World** | 200 | 