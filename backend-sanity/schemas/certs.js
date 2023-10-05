export default {
    name:'certs',
    title:'Certs',
    type:'document',
    fields:[
        {
            name:'img',
            title:'Img',
            type:'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'issuedBy',
            title:'IssuedBy',
            type:'string'
        },
         {
            name:'issueDate',
            title:'IssueDate',
            type: "string"
        }
    ]
}