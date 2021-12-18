

const TRELLO_PRICING_DATA = {
  compare: [
    {
      description_title: ["free", "standard", "premium", "enterprise"],
      description: [
        {
          id: 1,
          title: "unlimited cards",
          description: "",
          pathName: "",
          path: "",
          value: ["1", "0", "1", "1"]
        },

        {
          id: 2,
          title: "built-in automation",
          description: "Powerful no-code automation is built into every Trello board.",
          pathName: "Start automating",
          path: "butler-automation",
          value: ["1", "1", "0", "0"]
        },

        {
          id: 3,
          title: "assignee and due dates",
          description: "",
          pathName: "",
          path: "",
          value: ["0", "1", "1", "0"]
        },

        {
          id: 4,
          title: "iosand android mobile apps",
          description: "",
          pathName: "Download mobile apps",
          path: "platforms",
          value: ["0", "0", "0", "1"]
        },

        {
          id: 5,
          title: "trello templates",
          description: "Give your team a blueprint for success with tried-and-true templates from the Trello community.",
          pathName: "Try a template",
          path: "templates",
          value: ["1", "0", "1", "0"]
        }
      ],

      searchbar: {
        type: "search",
        placeholder: "Search",
        className: "UiFeatureComparisonTablestyles__SearchInput-sc-d89oq6-4 ioDTnz"
      }
    }
  ],

  intro: [
    {
      title: "Trello your way.",
      description: "Trusted by millions, Trello powers teams all around the world. Explore which option is right for you."
    }
  ],

  explore : [
    {
      id: 1,
      payment: [
        {
          title: "FREE",
          price: "0",
          payment_method: "Free for your whole team",
          description: "For individuals or teams looking to organize anything.",
          range: "false",
          button_label: "Get started",
          path: "signup",
          style: 
            {
              backgroundColor: "white",
              color: "#36b37e",
              border: "1px solid #36b37e"
            }
          
        }
      ],

      custom: [
        {
          title: "Included in Free:",
          content: [
            "Unlimited cards", "Up to 10 boards per Workspace", "Unlimited Power-Ups per board", "Unlimited storage (10MB/file)", "250 Workspace command runs per month", "Custom backgrounds & stickers", "Unlimited activity log", "Assignee and due dates", "iOS and Android mobile apps", "2-factor authentication"
          ]
        }
      ]
    },

    {
      id: 2,
      payment: [
        {
          title: "STANDARD",
          price: "5",
          payment_method: "Per user per month billed annually ($6 billed monthly)",
          description: "For teams that need to manage more work and scale collaboration.",
          range: "false",
          button_label: "Sign up now",
          path: "signup",
          style: 
            {
              backgroundColor: "white",
              color: "#36b37e",
              border: "1px solid #36b37e"
            }
          
        }
      ],

      custom: [
        {
          title: "Everything in Free, plus:",
          content: [
            "Unlimited boards", "Advanced checklists", "Custom Fields", "Unlimited storage (250MB/file)", "1,000 Workspace command runs per month", "Single board guests", "Saved searches"
          ]
        }
      ]
    },
    
    {
      id: 3,
      payment: [
        {
          title: "PREMIUM",
          price: "10",
          payment_method: "Per user per month billed annually ($12.50 billed monthly)",
          description: "Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.",
          range: "false",
          button_label: "Try for free",
          path: "signup",
          style: 
            {
              backgroundColor: "#36b37e",
              color: "white",
              border: "1px solid #36b37e"
            }
          
        }
      ],

      custom: [
        {
          title: "Everything in Standard, plus:",
          content: [
            "", "", "", "", "", "", "", "", "", ""
          ]
        }
      ]
    },

    {
      id: 4,
      payment: [
        {
          title: "ENTERPRISE",
          price: "",
          payment_method: "Per user per month billed annually ($199.95 annual price per user)",
          description: "For organizations that need to connect work across teams with more security and controls.",
          range: "true",
          button_label: "Contact sales",
          path: "contact",
          style: 
            {
              backgroundColor: "white",
              color: "#36b37e",
              border: "1px solid #36b37e"
            },
            
          rangestyle: {
            type: "range",
            min: 25,
            max: 5000
          }
        }
      ],

      custom: [
        {
          title: "Everything in Premium, plus:",
          content: [
            "", "", "", "", "", "", "", "", "", ""
          ]
        }
      ]
    },
  ]
};

export default TRELLO_PRICING_DATA;