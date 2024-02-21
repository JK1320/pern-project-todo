# pern-project-todo

jobs:
  deploy:
    runs-on: ubuntu-latest
    defaults: 
      run:
        working-directory: client

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
