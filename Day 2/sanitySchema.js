// Product schema
export const Product = {
    name: 'product',
    title: 'Latest Product',
    type: 'document',
    fields: [
      { name: 'id', title: 'Product ID', type: 'string', validation: (Rule) => Rule.required() },
      { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'number', validation: (Rule) => Rule.min(0) },
      { name: 'originalPrice', title: 'Original Price', type: 'number', validation: (Rule) => Rule.min(0) },
      { 
        name: 'image', 
        title: 'Image', 
        type: 'image', 
        options: { hotspot: true }, 
        validation: (Rule) => Rule.required() 
      },
    ],
  };
  

// Order schema

  export const Order = {
    name: 'order',
    title: 'Customer Order',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID', validation: (Rule) => Rule.required() },
      { 
        name: 'customer', 
        type: 'reference', 
        to: [{ type: 'customer' }], 
        title: 'Customer', 
        validation: (Rule) => Rule.required() 
      },
      { 
        name: 'items', 
        type: 'array', 
        title: 'Order Items', 
        of: [
          { 
            type: 'object', 
            fields: [
              { 
                name: 'product', 
                type: 'reference', 
                to: [{ type: 'product' }], 
                title: 'Product', 
                validation: (Rule) => Rule.required() 
              },
              { 
                name: 'quantity', 
                type: 'number', 
                title: 'Quantity', 
                validation: (Rule) => Rule.min(1).required() 
              },
            ]
          }
        ]
      },
      { name: 'totalAmount', type: 'number', title: 'Total Amount', validation: (Rule) => Rule.min(0).required() },
      { 
        name: 'shippingAddress', 
        type: 'object', 
        title: 'Shipping Address', 
        fields: [
          { name: 'street', type: 'string', title: 'Street', validation: (Rule) => Rule.required() },
          { name: 'city', type: 'string', title: 'City', validation: (Rule) => Rule.required() },
          { name: 'zipCode', type: 'string', title: 'ZIP Code', validation: (Rule) => Rule.required() },
        ] 
      },
      { name: 'orderDate', type: 'datetime', title: 'Order Date', validation: (Rule) => Rule.required() },
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Status', 
        options: { 
          list: ['Pending', 'Processing', 'Shipped', 'Delivered'], 
          layout: 'dropdown' 
        }, 
        validation: (Rule) => Rule.required() 
      },
    ],
  };


// Customer Schema



  export const Customer = {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      { 
        name: 'id', 
        type: 'string', 
        title: 'Customer ID', 
        validation: (Rule) => Rule.required() 
      },
      { 
        name: 'name', 
        type: 'string', 
        title: 'Full Name', 
        validation: (Rule) => Rule.required() 
      },
      { 
        name: 'email', 
        type: 'string', 
        title: 'Email Address', 
        validation: (Rule) => Rule.required().email("Please enter a valid email") 
      },
      { 
        name: 'password', 
        type: 'string', 
        title: 'Password (Encrypted)', 
        validation: (Rule) => Rule.required().min(8, "Password must be at least 8 characters long") 
      },
      { 
        name: 'phone', 
        type: 'string', 
        title: 'Phone Number', 
        validation: (Rule) => Rule.regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number").required() 
      },
      { 
        name: 'address', 
        type: 'object', 
        title: 'Address', 
        fields: [
          { name: 'street', type: 'string', title: 'Street', validation: (Rule) => Rule.required() },
          { name: 'city', type: 'string', title: 'City', validation: (Rule) => Rule.required() },
          { name: 'state', type: 'string', title: 'State/Region', validation: (Rule) => Rule.required() },
          { name: 'zipCode', type: 'string', title: 'ZIP Code', validation: (Rule) => Rule.required() },
          { name: 'country', type: 'string', title: 'Country', validation: (Rule) => Rule.required() },
        ]
      },
      { 
        name: 'orders', 
        type: 'array', 
        title: 'Orders', 
        of: [{ type: 'reference', to: [{ type: 'order' }] }]
      },
      { 
        name: 'wishlist', 
        type: 'array', 
        title: 'Wishlist', 
        of: [{ type: 'reference', to: [{ type: 'product' }] }]
      },
      { 
        name: 'createdAt', 
        type: 'datetime', 
        title: 'Account Created At', 
        validation: (Rule) => Rule.required() 
      },
      { 
        name: 'updatedAt', 
        type: 'datetime', 
        title: 'Last Updated At', 
        validation: (Rule) => Rule.required() 
      },
    ],
  };
  


