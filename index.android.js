var React = require('react');
var {Text, View, Button, AppRegistry } = require('react-native'); // variável text recebendo a propriedade text do react-native


const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor((numero_aleatorio * 10));
  alert(numero_aleatorio);
}


const App = () => {

  return (
      <View>
        <Text>Gerador de números randômicos!</Text>
        <Button
          title="Gerar um número randômico"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
};

AppRegistry.registerComponent('random', () =>  App);