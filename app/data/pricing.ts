export const pricingPlans = [
    {
      name: 'Free Trial',
      description: 'Explore the Pathfinding Visualizer with basic features.',
      monthlyPrice: '0',
      annualPrice: '0',
      instances: 1,
      gridSaveLimit: 1,
      buttonText: 'Active Plan',
      features: [
        { name: 'Basic Features', available: true },
        { name: 'Active Instances', value: '1' },
        { name: 'Grid Save Option', value: '0'},
        { name: 'Limited Algorithms'},
      ],
    },
    {
      name: 'Business Plan',
      description: 'Perfect for growing learners and advanced visualizations.',
      monthlyPrice: '199',
      annualPrice: '2000',
      instances: 3,
      gridSaveLimit: 5,
      buttonText: 'Get Started',
      features: [
        { name: 'Basic Features', available: true },
        { name: 'Active Instances', value: '3'},
        { name: 'Grid Save Option', value: '5'},
        { name: 'Limited Algorithms'},
      ],
    },
    {
      name: 'Enterprise Plan',
      description: 'Best for large teams and professional pathfinding solutions.',
      monthlyPrice: '499',
      annualPrice: '5000',
      instances: 10,
      gridSaveLimit: 'Unlimited',
      buttonText: 'Get Started',
      features: [
        { name: 'Basic Features', available: true },
        { name: 'Active Instances', value: '10'},
        { name: 'Grid Save Option', value: 'Unlimited'},
        { name: 'Limited Algorithms', },
      ],
    },
  ];
  