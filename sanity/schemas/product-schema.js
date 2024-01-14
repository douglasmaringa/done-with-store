const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string',
            validation: Rule => Rule.required()
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:'name',
                maxLength:200
            },
            validation: Rule => Rule.required()
        },
        {
            name:"image",
            title:"Main Image",
            type:"image",
            options:{
                hotspot:true
            },
            validation: Rule => Rule.required()
        },
        {
            name:"extraImages",
            title:"Extra Images",
            type:"array",
            of:[{type:"image"}],
        },
        {
            name:"colors",
            title:"Colors",
            type:"array",
            of:[
                {
                 type:"string",
                 options:{
                    list:["Grey","Black","Blue"]
                 }
                }
            ],
        },
        {
            name:"description",
            title:"Description",
            type:"text",
            validation: Rule => Rule.required()
        },
        {
            name:"price",
            title:"Price",
            type:"number",
            validation: Rule => Rule.required().min(0)
        },
        {
            name:"createdAt",
            title:"Created At",
            type:"datetime",
            options:{
                dateFormat:"YYYY-MM-DDTHH:mm:ssZ",
            },
            readOnly:true,
        }
    ],
    initialValue: {
        createdAt: new Date().toISOString()
    },
}
export default product