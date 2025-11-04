import React from 'react';

interface AppPressedKeyState {
  lastPressedKey: string | null;
}

export class App extends React.Component<{}, AppPressedKeyState> {
  state: AppPressedKeyState = {
    lastPressedKey: null,
  };

  // usar um handler de classe com arrow function para preservar `this`
  onKeyUp = (event: KeyboardEvent) => {
    // event.key é seguro aqui — este é o KeyboardEvent do DOM
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount() {
    // registrar listener global para 'keyup'
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    // remover listener global
    document.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}
