# How to Contribute to CollectionBuilder

Thank you for contributing to CollectionBuilder!

CollectionBuilder prioritizes pragmatic, sustainable, and simplified approaches to infrastructure to ensure the tool is "do-able" and approachable for digital knowledge workers in libraries and museums, empowering them to take control of their web systems. 
The core team is *not* full time developers--we are librarians.
Thus, we are focused on creating a supportive, inclusive community with low barriers to contributing (please see our [Code of Conduct](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/CODE_OF_CONDUCT.md)).

Honestly, we do a lot of stuff the slow/old/inefficient/wrong way... but we make it work and invite you to learn/teach with us!

## Project resources

- Email contact: <collectionbuilder.team@gmail.com>
- [Main project site](https://collectionbuilder.github.io/)
- [User Documentation - CB-Docs](https://collectionbuilder.github.io/cb-docs/)
- Technical Documentation is found in individual project repositories in the "/docs" folder.
- General project tracking takes place in Issues in individual template repositories, or the [CollectionBuilder home repository](https://github.com/CollectionBuilder/collectionbuilder.github.io/issues)
- [CollectionBuilder Discussions](https://github.com/orgs/CollectionBuilder/discussions)

## Issues

Since this is a relatively small project, we are informal in using GitHub Issues and welcome you to open one to get in touch. 
Issues should be opened in the repository of the specific template you are using for bug reports, feature ideas, and requests for missing documentation.
The team also uses Issues for project management related to the CollectionBuilder project.

For questions related to your own project using a CB template, it is best to ask for help in the main [CollectionBuilder Discussions form](https://github.com/orgs/CollectionBuilder/discussions) rather than opening an Issue.

Here are some tips:

- [How to use GitHub Issues](https://guides.github.com/features/issues/)
- Please focus on clear communication, providing plenty of detail and links so that we can understand the bug or proposal.
- Search the Issues to see if a related report has already been opened (if so add a comment or reaction!).
- Check our [documentation](https://collectionbuilder.github.io/cb-docs/) resources for solutions and other ways to get in touch.
- You can more informally ask questions and share ideas in the main [CollectionBuilder Discussions forum](https://github.com/orgs/CollectionBuilder/discussions). Discussions is often the best place to post questions about debugging metadata or pages in your own projects (rather than issues with the template code).

## Pull Requests 

CollectionBuilder welcomes [Pull Requests](https://help.github.com/en/articles/about-pull-requests) from outside contributors. 
Please provide plenty of detail in the PR so that the project team fully understands your contribution.

- [How to create a PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

## Conventions

- Include lots of inline comments documenting code! The entire CollectionBuilder project has a educational outlook.
- Keep code structure *relatively* simple. The templates are intended to be comprehensible for digital librarians and DH practitioners to use and modify, not necessarily fully optimized solutions.
- Include spaces for readability. For example, in Liquid `{% if site.example %}{{ site.example }}{% endif %}`, not `{%if site.example%}{{site.example}}{%endif%}`.
- To improve readability, avoid excess white space and random indentations.
- Indent using spaces. HTML, JS, CSS and related files should be indented using 4 spaces. YAML with 2 spaces.
- Use `;` in metadata to denote multi-valued fields.
- New features should be progressive--adding features, while maintaining backwards compatibility with existing data setups. If possible, sane defaults should be set in Liquid and JS, so that projects lacking updated config variables will still function.
- Main branch should be code that is ready to go. Use feature branches for development and provide meaningful commit messages.
