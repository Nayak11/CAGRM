# Project-Team-11

Here is an unique project I am assigning to  you guys:
###  California Government Regulation Management - CAGRM
Develop a data driven application to manage city, county and state regulations in California for small medium businesses.

First  take a look and research this startup company: https://fiscalnote.com/small-medium-organizations/

Your scope is narrowed to CA

Get set go..  fast 

##################################################################################

# Student Names:
Suhas Nayak, Kirati Bhuva, Shraddha Jamadade, Spandana Padala

# Team Name: 
Team11

# Project Title: 
EconomiCali

----------------------------------------------------------------------------------------------------------------------------------------

# PROBLEM STATEMENT
Government information is not easy to access and there is lot of it. For any business, keeping the information which their business depends on in spreadsheet which are being updated. Traditionally they were looking at around 50+ different websites, Federal websites, take links, PDFs, texts and put them all together into one folder on to their computer. Having a dedicated platform which provides the ability to view all the legal information about their businesses and take decisions accordingly will help organizations proactively grow and protect themselves.

----------------------------------------------------------------------------------------------------------------------------------------

# PERSONAS
Personas for the application ‘EconomiCali’ are Government Affairs team members of organizations that want to run a business or continue running their business in the country efficiently.

----------------------------------------------------------------------------------------------------------------------------------------

# IMPLEMENTATION
##### Web Front-End 
We used bootstrap because of its speed of development, responsiveness, consistency, customizability and available community support. We implemented the front-end in ReactJS, and hosted on AWS EC2. ReactJS gave us the easier approach as we built custom components that we could use everywhere in the project. ReactJS renders only changed DOM and its fast in doing that. It also helped us build the project as a single page application. 

##### Back-End 
We have used Node.JS as server side framework. It runs on a single thread also it is a light weight process. When compared to other server side frameworks Node JS request-response methodology is relatively faster. We have hosted this on an AWS EC2 instance. Node JS provides a feature rich library that we can use with just importing the required modules not worrying about how they work at backend. 

##### Database 
We have used MongoDB database as our datasource. We chose MongoDB for two reasons, first MongoDB's document-oriented data model makes it exceptionally easy to add or change fields second it helped us to quickly evolve an application, MongoDB's flexible data model facilitates this. Rather than fitting an application to meet schema requirements.

##### Web Scrapping
We gathered required information needed for our application from California Legislative Information site using Web Scraping which is also known as Screen Scraping, Web Harvesting, Web Data Extraction etc. Using this technique, we extracted huge amount of data from Official California Legislation Information site and saved it in MongoDB. We used cheerio library to scrap the data. 

----------------------------------------------------------------------------------------------------------------------------------------

# FEATURES 
##### Bills: 
The application displays all the bills corresponding each category such as Education, Government, Corporation, Agriculture, Health Care etc.  Each has the following fields
o	Bill No
o	Introducer
o	Introduced On 
o	Category
o	Title
o	Status
o	Bill Type

########## Bill No: 
It is a unique number corresponding to each Bill given by the Government when a bill is introduced.

########## Title: 
Provides a brief description about the bill.

########## Introducer: 
It is the person who has introduced the bill.

########## Introduced On: 
The date on which the bill was introduced.

########## Category: 
This option defines under which category the bills is arranged, for example: Education, Health-Care, Corporation, etc. The user can select particular category from the drop-down box and view all the bills corresponding to that category.

########## Status: 
Determines the status of the bill which can be passed, Failed, Enacted, etc. The select status radio button allows users to view all the bills corresponding to the selected status.This page also provides the functionality to filter out other categories and keep only those of our interest, thus enabling efficient search.If we want to find a bill which is particularly effective within the issue area of Sports and Recreation, then after applying the scope filter and choosing particular region from the list, we go to the categories tab and mark that we only want to see the effective legislatures within the Sports and Recreation field. 

########## The search bar: 
Allows users to provide a bill number to display its respective details. When a user inputs the Bill number in the search, it displays the details of that particular bill.

########## On clicking a particular bill number link: 
The user is redirected to a page with more detailed information on that particular bill.

# Comments on the Bill:
When a user clicks on the Bill no, a complete description of the bill is displayed and user who is the representative of the organization can comment on bills to have collaboration among his colleagues.
It provides transparency among the members in his team to know the status and the progress on the bill.

##### Legislative Members:
This feature is used to display the list of legislative members, with their profile and their mail ids for the organization to communicate with them to work on the bills

##### Email Feature:
Each user is provided with mail service to communicate with the Senators on the bills

##### Dashboard:
Bar graph which shows top 5 legislative members (one who dealt with maximum number of bills) in the category selected by the user.
Pie chart which shows status of selected bill in particular category. 
Analytics provides the organization to give an insight of the top senators under category who dealt with more no of bills for each category. It also showcases the bill status for each category.

##### Saved Preference:
It allows user to search for keywords, which highlights the text in Yellow from the available bills. It also allows the user to save the selected bills. User quickly navigate to the corresponding bill that he wants to save and work on them

----------------------------------------------------------------------------------------------------------------------------------------

# CONCLUSION
To conclude, we were able to help Small and Medium Organizations to some extent to help solve beautifully complicated intersection of information between Government, Data and Business which is changing rapidly, constantly and inconsistently by aggregating massive government datasets, by seeing critical information more clearly.  
