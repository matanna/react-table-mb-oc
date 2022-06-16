# react-table-mb-oc
React libraries for create table in a react component

---

## Installation
You can install react-table-mb-oc with NPM or Yarn

``npm install react-table-mb-oc --save``

or

``yarn add react-table-mb-oc``

## Start

Import the Table component in your react application

``<Table elements={yourElements} columns={columns} style={style} />``

**yourElements :** *(Required)*
Array of elements you want to display in a table.  Each element must be an object

*Example* :

```
[{
firstName: "Jhon",
lastName: "Doe",
dateOfBirth: "1995/10/31",
startDate: "2021/06/18",
street: "Baker Street",
city: "London",
state: "buckingam",
zipCode: 5486,
department: "Technical",
},
{
firstName: "Alice",
lastName: "Cooper",
dateOfBirth: "1956/05/13",
startDate: "2022/08/04",
street: "Street in new york",
city: "New York",
state: "Alabama",
zipCode: 5687456,
department: "Legal",
}]
```

**columns :** *(Required)*
Array of elements corresponding to columns you want to display in the table. 
Columns name must match with our properties elements

For each column, you must have to specify : 
- data : the name of column
- title : the label of the column
- order : the order you want to the column is displayed in the table
- typeData : the type of the data displayed in the column (very important for the sort)

*Example* :

```
[
  { data: "firstName", title: "First Name", order: 1, typeData: "string" },
  { data: "lastName", title: "Last Name", order: 2, typeData: "string" },
  { data: "dateOfBirth", title: "Date Of Birth", order: 5, typeData: "date" },
  { data: "startDate", title: "Start Date", order: 3, typeData: "date" },
  { data: "street", title: "Street", order: 6, typeData: "string" },
  { data: "city", title: "City", order: 7, typeData: "string" },
  { data: "state", title: "State", order: 8, typeData: "string" },
  { data: "zipCode", title: "Zip Code", order: 9, typeData: "number" },
  { data: "department", title: "Department", order: 4, typeData: "string" },
]
```

**style :** *(Facultative)*
Object where you can specify some properties for stylize your table. 
The table had a default style but some properties are editable :

- border : Border top and bottom for the table
- subBorder : Borders of the table rows
- bgOddRow : Background of the odd rows
- bgEvenRow : Background of the even rows
- active : background used on hover and for button, input and select elements

*Example* :

```
{
  border: "#06ad3d",
  subBorder: "#30655e",
  bgOddRow: "#61f0e4",
  bgEvenRow: "#f4f4ff",
  active: "#99AAbb",
}
```
