const links = [
    {
      title: 'FAQ',
      url: ''
    },
    {
      title: 'Media Centre',
      url: ''
    },
    {
      title: 'Ways to Watch',
      url: ''
    },
    {
      title: 'Cookie Preferences',
      url: ''
    },
    {
      title: 'Speed Test',
      url: ''
    },
    {
      title: 'Help Centre',
      url: ''
    },
    {
      title: 'Investor Relations',
      url: ''
    },
    {
      title: 'Terms of Use',
      url: ''
    },
    {
      title: 'Corporate Information',
      url: ''
    },
    {
      title: 'Legal Notices',
      url: ''
    },
    {
      title: 'Account',
      url: ''
    },
    {
      title: 'Jobs',
      url: ''
    },
    {
      title: 'Privacy',
      url: ''
    },
    {
      title: 'Contact Us',
      url: ''
    },
    {
      title: 'Only on Netflix',
      url: ''
    }
  ];

  const linksContainer = document.getElementById('links-container');

  links.forEach(link => {
    const linkElement = document.createElement('div');
    linkElement.classList.add('col-xl-3', 'col-lg-3', 'col-md-3', 'col-sm-3', 'p-2');
    linkElement.innerHTML = `<a class="lastspan" href="${link.url}">${link.title}</a>`;
    linksContainer.appendChild(linkElement);
  });