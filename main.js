import blessed from 'blessed';

const menuOptions = ['Adicionar zumbi', 'classificar zumbis', 'Pato']

const screen = blessed.screen({ smartCSR: true, title: 'Coderchallenge' });

const listContainer = blessed.box({
  top: 'center',
  left: 'center',
  width: '90%',
  height: '90%',
  border: {
    type: 'line'
  },
  scrollable: true,
  label: 'Ações'
});

const options = blessed.list({
  parent: listContainer,
  top: 0,
  left: 0,
  keys: true,
  vi: true,
  mouse: true,
  border: {
    type: 'line',
  },
  style: {
    selected: {
      bg: 'blue',
      fg: 'white',
    }
  },
  items: menuOptions
});

screen.append(listContainer);

screen.key(['scape', 'C-c'], () => { return process.exit(0); })

listContainer.focus();
screen.render();
