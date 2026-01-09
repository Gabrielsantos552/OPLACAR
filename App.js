import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/* ===== IMAGENS ===== */
const APP_LOGO = require('./assets/logo.png');
const PALMEIRA_LOGO = require('./assets/pal.png');
const CANTINHO_LOGO = require('./assets/cant.png');
const PALMEIRA = require('./assets/palmeira.jpg');
const TBF_FOTO = require('./assets/tbf.png');

/* ===== CAMPEONATOS ===== */
const CHAMPIONSHIPS = [
  {
    name: 'RURALZÃO',
    color: '#02610f',
    buttonColor: '#02610f',
    screen: 'ChampionshipPhases',
    phases: ['FASE DE GRUPOS', 'OITAVAS', 'QUARTAS', 'SEMIFINAIS', 'FINAL 🏆'],
  },
  {
    name: 'JOPS',
    color: '#1976D2',
    buttonColor: '#1976D2',
    screen: 'JopsCategory',
  },
  {
    name: 'COPINHA',
    color: '#FF9800',
    buttonColor: '#FF9800',
    screen: 'ChampionshipPhases',
    phases: ['FASE DE GRUPOS', 'QUARTAS', 'SEMIFINAIS', 'FINAL 🏆'],
  },
  {
    name: 'COPA CIDADE',
    color: '#68F9A5',
    buttonColor: '#68F9A5',
    screen: 'ChampionshipPhases',
    phases: ['PRIMEIRA FASE', 'MATA-MATA', 'FINAL 🏆'],
  },
  {
    name: 'COPA BATOM',
    color: '#FF2C2C',
    buttonColor: '#FF2C2C',
    screen: 'CopaBatomScreen',
  },
];


/* ===== CLASSIFICADOS RURALZÃO ===== */
const CLASSIFICADOS_FASE_GRUPOS = [
  'PALMEIRA',
  'CATIMBEIROS',
  'BOCA JR',
  'VASCO SF',
  'ARARA',
  'CANTINHO CM',
  'SANTANA',
  'VERDÃO',
  'LAPA',
  'CANTINHO',
  'BARRO',
  'JUVENTUS',
  'TERRA DURA',
  'SERRANO',
  'BARCELONA',
  'BURITI GRANDE',
];

const RESULTADOS_OITAVAS = [
  {
    jogo: 'VERDÃO 3 x 1 LAPA',
    classificado: 'VERDÃO',
    penaltis: false,
  },
  {
    jogo: 'PALMEIRA 5 x 0 CATIMBEIROS',
    classificado: 'PALMEIRA',
    penaltis: false,
  },
  {
    jogo: 'BOCA JR 2 x 1 VASCO SF',
    classificado: 'BOCA JR',
    penaltis: false,
  },
  {
    jogo: 'JUVENTUS 2 x 0 CANTINHO CM',
    classificado: 'JUVENTUS',
    penaltis: false,
  },
  {
    jogo: 'CANTINHO 1 (3) x (1) 1 BARRO',
    classificado: 'CANTINHO',
    penaltis: true,
  },
  {
    jogo: 'ARARA 0 (3) x (5) 0 SANTANA',
    classificado: 'SANTANA',
    penaltis: true,
  },
  {
    jogo: 'TERRA DURA 3 x 1 SERRANO',
    classificado: 'TERRA DURA',
    penaltis: false,
  },
  {
    jogo: 'BURITI GRANDE 3 x 1 BARCELONA',
    classificado: 'BURITI GRANDE',
    penaltis: false,
  },
];


const RESULTADOS_QUARTAS = [
  {
    confronto: 'BURITI GRANDE x CANTINHO',
    ida: 'IDA: BURITI GRANDE 3 x 1 CANTINHO',
    volta: 'VOLTA: BURITI GRANDE 0 x 3 CANTINHO',
    classificado: 'CANTINHO',
    penaltis: false,
  },
  {
    confronto: 'VERDÃO x JUVENTUS',
    ida: 'IDA: VERDÃO 2 x 2 JUVENTUS',
    volta: 'VOLTA: VERDÃO 2 (4) x 2 (3) JUVENTUS',
    classificado: 'VERDÃO',
    penaltis: true,
  },
  {
    confronto: 'SANTANA x PALMEIRA',
    ida: 'IDA: SANTANA 0 x 1 PALMEIRA',
    volta: 'VOLTA: SANTANA 0 x 2 PALMEIRA',
    classificado: 'PALMEIRA',
    penaltis: false,
  },
  {
    confronto: 'BOCA JR x TERRA DURA',
    ida: 'IDA: BOCA JR 2 x 1 TERRA DURA',
    volta: 'VOLTA: BOCA JR 1 x 0 TERRA DURA',
    classificado: 'BOCA JR',
    penaltis: false,
  },
];

const RESULTADOS_SEMIFINAL = [
  {
    jogo: 'VERDÃO 1 x 3 PALMEIRA',
    classificado: 'PALMEIRA',
    penaltis: false,
  },
  {
    jogo: 'CANTINHO 0 (3) x (1) 0 BOCA JR',
    classificado: 'CANTINHO',
    penaltis: true,
  },
];

/* ===== FINAL ===== */
const FinalScreen = () => (
  <View style={styles.finalContainer}>
    <Text style={styles.finalTitle}>FINAL 🏆</Text>

    <Image
    source={PALMEIRA}
    style={styles.teamPhoto}
    resizeMode="contain"
  />


    <View style={styles.championBox}>
      <Text style={styles.championText}>PALMEIRA CAMPEÃO</Text>
    </View>

    <View style={styles.finalMatch}>
      <View style={styles.teamBox}>
        <Image source={PALMEIRA_LOGO} style={styles.finalLogo} />
        <Text style={styles.teamName}>PALMEIRA</Text>
      </View>

      <View style={styles.scoreBox}>
        <Text style={styles.finalScore}>2 x 2</Text>
        <Text style={styles.finalPenalty}>PÊNALTIS 5 x 4</Text>
      </View>

      <View style={styles.teamBox}>
        <Image source={CANTINHO_LOGO} style={styles.finalLogo} />
        <Text style={styles.teamName}>CANTINHO</Text>
      </View>
    </View>

    <View style={styles.finalFooter}>
      <Text style={styles.footerText}>RURALZÃO 2025</Text>
    </View>
  </View>
);


/* ===== JOPS FASES ===== */
const JopsPhasesScreen = ({ route, navigation }) => {
  const { cat } = route.params;
  const phases = ['CLASSIFICADOS', 'FINAL 🏆'];

  return (
    <View style={styles.listScreenContainer}>
      <ScreenTitle title={`JOPS ${cat}`} />
      <ScrollView contentContainerStyle={styles.listContentContainer}>
        {phases.map((phase, index) => (
          <View key={index} style={styles.phaseItemContainer}>
            <Text style={styles.phaseText}>{phase}</Text>
              <AccessButton
                title="ACESSAR"
                buttonStyle={{ backgroundColor: '#1976D2', marginTop: 10 }}
                onPress={() => {
                    if (phase === 'CLASSIFICADOS') {
                      navigation.navigate('ClassificacaoJopsSub18');
                    }
                    else if (phase.includes('FINAL')) {
                      navigation.navigate('FinalJopsSub18');
                    }
                  }}
              />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

/*====== JOPS =======*/

const CLASSIFICACAO_JOPS_SUB18 = [
  { time: 'TBF', j: 4, v: 4, e: 0, d: 0 },
  { time: 'IFPI', j: 4, v: 2, e: 2, d: 0 },
  { time: 'ANGELINA', j: 4, v: 3, e: 0, d: 1 },
  { time: 'MARIA MENDES', j: 4, v: 0, e: 0, d: 4 },
  { time: 'ECO ESCOLA', j: 4, v: 1, e: 0, d: 3 },
];

/* ===== COMPONENTES ===== */
const ScreenTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.screenTitle}>{title}</Text>
  </View>
);

const AccessButton = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity style={[styles.accessButton, buttonStyle]} onPress={onPress}>
    <Text style={styles.accessButtonText}>{title}</Text>
  </TouchableOpacity>
);

/* ===== TELAS ===== */
const JopsCategoryScreen = ({ navigation }) => {
  const categorias = ['SUB 18', 'SUB 15'];

  return (
    <View style={styles.listScreenContainer}>
      <ScreenTitle title="JOPS" />
      <ScrollView contentContainerStyle={styles.listContentContainer}>
        {categorias.map((cat, index) => (
          <View key={index} style={styles.phaseItemContainer}>
            <Text style={styles.phaseText}>{cat}</Text>
            <AccessButton
              title="ACESSAR"
              buttonStyle={{ backgroundColor: '#1976D2', marginTop: 10 }}
              onPress={() =>
                 navigation.navigate('JopsPhases', { cat })
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const SplashScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={APP_LOGO} style={styles.logoImage} resizeMode="contain" />
    <AccessButton
      title="ENTRAR"
      onPress={() => navigation.navigate('Championships')}
      buttonStyle={{ backgroundColor: '#02610f', marginTop: 80 }}
    />
  </View>
);

const ChampionshipsScreen = ({ navigation }) => (
  <View style={styles.listScreenContainer}>
    <ScreenTitle title="CAMPEONATOS" />
    <ScrollView contentContainerStyle={styles.listContentContainer} style={styles.scrollStyle}>
      {CHAMPIONSHIPS.map((item, index) => (
        <View key={index} style={styles.listItemContainer}>
          <View style={[styles.listNameBackground, { borderColor: item.color }]}>
            <Text style={[styles.listNameText, { color: item.color }]}>{item.name}</Text>
          </View>

          <AccessButton
            title="ACESSAR"
            buttonStyle={{ backgroundColor: item.buttonColor }}
            onPress={() => {
              if (item.name === 'COPA BATOM') {
                navigation.navigate('CopaBatomScreen');
              } else {
                navigation.navigate(item.screen, {
                  name: item.name,
                  phases: item.phases,
                  buttonColor: item.buttonColor,
                });
              }
            }}
          />
        </View>
      ))}
    </ScrollView>
  </View>
);

const ChampionshipPhasesScreen = ({ route, navigation }) => {
  const { name, phases, buttonColor } = route.params;

  const handlePress = (phase) => {
  if (phase === 'FASE DE GRUPOS') {
    navigation.navigate('Classificados');
  } 
  else if (phase === 'OITAVAS') {
    navigation.navigate('Oitavas');
  } 
 else if (phase === 'QUARTAS') {
  navigation.navigate('Quartas');
  }
  else if (phase === 'SEMIFINAIS') {
  navigation.navigate('Semifinal');
  }
  else if (phase.includes('FINAL') && name === 'RURALZÃO') {
    navigation.navigate('FinalDetails');
  } 
  else {
    alert(`Fase: ${phase}`);
  }
};


  return (
    <View style={styles.listScreenContainer}>
      <ScreenTitle title={`JOGOS ${name}`} />
      <ScrollView contentContainerStyle={styles.listContentContainer} style={styles.scrollStyle}>
        {phases.map((phase, index) => (
          <View key={index} style={styles.phaseItemContainer}>
            <Text style={styles.phaseText}>{phase}</Text>
            <AccessButton
              title="ACESSAR"
              onPress={() => handlePress(phase)}
              buttonStyle={{ backgroundColor: buttonColor, marginTop: 10 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const CopaBatomScreen = () => {
  const phases = ['FASE DE GRUPOS FEMININO', 'SEMIFINAIS', 'FINAL 🏆'];

  return (
    <View style={styles.listScreenContainer}>
      <ScreenTitle title="JOGOS COPA BATOM" />
      <ScrollView contentContainerStyle={styles.listContentContainer} style={styles.scrollStyle}>
        {phases.map((phase, index) => (
          <View key={index} style={styles.phaseItemContainer}>
            <Text style={[styles.phaseText, { color: '#FF4081' }]}>{phase}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const ClassificacaoJopsSub18Screen = () => (
  <View style={styles.listScreenContainer}>
    <View style={{ marginTop: 30 }}>
      <ScreenTitle title={'CLASSIFICAÇÃO SUB 18\nJOPS'} />
    </View>

    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
    >
      <View style={{ width: '95%', marginTop: 20 }}>
        
        {/* Cabeçalho */}
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text style={[styles.tableHeader, { flex: 3 }]}>TIMES</Text>
          <Text style={styles.tableHeader}>J</Text>
          <Text style={styles.tableHeader}>V</Text>
          <Text style={styles.tableHeader}>E</Text>
          <Text style={styles.tableHeader}>D</Text>
        </View>

        {/* Linhas */}
        {CLASSIFICACAO_JOPS_SUB18.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 3 }]}>{item.time}</Text>
            <Text style={styles.tableCell}>{item.j}</Text>
            <Text style={styles.tableCell}>{item.v}</Text>
            <Text style={styles.tableCell}>{item.e}</Text>
            <Text style={styles.tableCell}>{item.d}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);


/*========= FINAL JOPS ==========*/
const FinalJopsSub18Screen = () => (
  <View style={styles.finalContainer}>
    <Text style={styles.finalTitle}>FINAL 🏆</Text>

    <Image
      source={TBF_FOTO}
      style={styles.teamPhoto}
      resizeMode="contain"
    />

    <View style={[styles.championBox, { backgroundColor: '#1976D2' }]}>
      <Text style={styles.championText}>TBF CAMPEÃO</Text>
    </View>

    <View style={styles.finalMatch}>
      <View style={styles.teamBox}>
        <Text style={styles.teamName}>TBF</Text>
      </View>

      <View style={styles.scoreBox}>
        <Text style={styles.finalScore}>3 x 2</Text>
      </View>

      <View style={styles.teamBox}>
        <Text style={styles.teamName}>IFPI</Text>
      </View>
    </View>

    <View style={styles.finalFooter}>
      <Text style={styles.footerText}>JOPS SUB 18</Text>
    </View>
  </View>
);

/* ===== RURALZÃO TELA ===== */

/* ===== CLASSIFICADOS ===== */
const ClassificadosScreen = () => (
  <View style={styles.listScreenContainer}>
    <ScreenTitle title="CLASSIFICADOS" />
    <ScrollView contentContainerStyle={styles.listContentContainer} style={styles.scrollStyle}>
      {CLASSIFICADOS_FASE_GRUPOS.map((time, index) => (
        <Text key={index} style={styles.classificadoText}>
          {index + 1}. {time}
        </Text>
      ))}
    </ScrollView>
  </View>
);

/* ===== OITAVAS ===== */
const OitavasScreen = () => (
  <View style={styles.listScreenContainer}>
    <ScreenTitle title="OITAVAS DE FINAL" />

    <ScrollView contentContainerStyle={styles.listContentContainer}>
      {RESULTADOS_OITAVAS.map((item, index) => (
        <View key={index} style={styles.resultadoItem}>
          <Text
            style={[
              styles.resultadoText,
              item.penaltis && styles.penaltiDestaque,
            ]}
          >
            {item.jogo}
          </Text>

          <Text style={styles.classificadoLabel}>
            CLASSIFICADO:{' '}
            <Text style={styles.classificadoNome}>
              {item.classificado}
            </Text>
          </Text>

          {item.penaltis && (
            <Text style={styles.penaltiLabel}>
              DECIDIDO NOS PÊNALTIS
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  </View>
);


/* ===== QUARTAS ===== */
const QuartasScreen = () => (
  <View style={styles.listScreenContainer}>
    <ScreenTitle title="QUARTAS DE FINAL" />

    <ScrollView contentContainerStyle={styles.listContentContainer}>
      {RESULTADOS_QUARTAS.map((item, index) => (
        <View key={index} style={styles.resultadoItem}>
          <Text style={styles.confrontoTitle}>{item.confronto}</Text>

          <Text style={styles.resultadoText}>{item.ida}</Text>
          <Text style={styles.resultadoText}>{item.volta}</Text>

          <Text style={styles.classificadoLabel}>
            CLASSIFICADO:{' '}
            <Text style={styles.classificadoNome}>
              {item.classificado}
            </Text>
          </Text>

          {item.penaltis && (
            <Text style={styles.penaltiLabel}>
              DECIDIDO NOS PÊNALTIS
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  </View>
);

/* ===== SEMIFINAIS ===== */
const SemifinalScreen = () => (
  <View style={styles.listScreenContainer}>
    <ScreenTitle title="SEMIFINAIS" />

    <ScrollView contentContainerStyle={styles.listContentContainer}>
      {RESULTADOS_SEMIFINAL.map((item, index) => (
        <View key={index} style={styles.resultadoItem}>
          <Text
            style={[
              styles.resultadoText,
              item.penaltis && styles.penaltiDestaque,
            ]}
          >
            {item.jogo}
          </Text>

          <Text style={styles.classificadoLabel}>
            CLASSIFICADO:{' '}
            <Text style={styles.classificadoNome}>
              {item.classificado}
            </Text>
          </Text>

          {item.penaltis && (
            <Text style={styles.penaltiLabel}>
              DECIDIDO NOS PÊNALTIS
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  </View>
);



/* ===== NAVEGAÇÃO ===== */
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerShown: true,
    headerTitle: '',
    headerBackTitle: '',
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#020305',
      elevation: 0,
      shadowOpacity: 0,
    },
  }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="Championships" component={ChampionshipsScreen} options={{ headerTitle: () => null }}/>
        <Stack.Screen name="Classificados" component={ClassificadosScreen} options={{ headerTitle: () => null }}/>
        <Stack.Screen name="Oitavas" component={OitavasScreen} options={{ headerTitle: () => null }}/>
        <Stack.Screen name="Quartas" component={QuartasScreen} options={{ headerTitle: () => null }}/>
        <Stack.Screen name="Semifinal" component={SemifinalScreen} options={{ headerTitle: () => null }}/>
        <Stack.Screen name="ChampionshipPhases" component={ChampionshipPhasesScreen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="JopsCategory" component={JopsCategoryScreen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="JopsPhases" component={JopsPhasesScreen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="ClassificacaoJopsSub18" component={ClassificacaoJopsSub18Screen} options={{ headerTitle: () => null }} />
        <Stack.Screen  name="FinalJopsSub18" component={FinalJopsSub18Screen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="CopaBatomScreen" component={CopaBatomScreen} options={{ headerTitle: () => null }} />
        <Stack.Screen name="FinalDetails" component={FinalScreen} options={{ headerTitle: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ===== ESTILOS ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020305',
    alignItems: 'center',
    paddingTop: 30,
  },
  
listScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
    alignItems: 'center',
  },

scrollStyle: { 
    width: '100%' 
  },

listContentContainer: { 
    alignItems: 'center', 
    paddingBottom: 40 
  },

titleContainer: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#fff', 
    marginBottom: 30 
  },

screenTitle: { 
    color: '#fff', 
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center'
  },

logoImage: { 
    width: 400,
    height: 350, 
    marginTop: 60 
  },

listItemContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 60, 
  },

listNameBackground: {
    width: '100%',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    alignItems: 'center',
  },

listNameText: { fontSize: 28,
    fontWeight: '900'
  },

accessButton: { 
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 12, 
  },

accessButtonText: {
    color: '#fff',
    fontWeight: 'bold' 
  },

phaseItemContainer: {
    alignItems: 'center',
    marginBottom: 30 
  },

phaseText: { 
    fontSize: 22, 
    color: '#fff', 
    fontWeight: 'bold' 
  },

teamPhoto: {
    width: '95%',
    height: 380,
    marginBottom: 5,
    borderRadius: 10 
  },


classificadoText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 6 
  },
  
resultadoItem: {
    width: '90%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#68F9A5',
  },

resultadoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

penaltiDestaque: {
    color: '#FFFFFF', 
  },

penaltiLabel: {
    fontSize: 12,
    color: '#FFD700',
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },

confrontoTitle: {
    color: '#68F9A5',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },

classificadoLabel: {
    marginTop: 6,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

classificadoNome: {
    color: '#68F9A5',
    fontWeight: 'bold',
  },

finalContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

finalTitle: {
    color: '#FFD700',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

championBox: {
    backgroundColor: '#02610f',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 30,
  },

championText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

finalMatch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

teamBox: {
    alignItems: 'center',
    width: '30%',
  },

finalLogo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

teamName: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
  },

scoreBox: {
    alignItems: 'center',
    width: '40%',
  },

finalScore: {
    color: '#68F9A5',
    fontSize: 42,
    fontWeight: 'bold',
  },

finalPenalty: {
  color: '#FFD700',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },

finalFooter: {
    marginTop: 40,
  },

footerText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.7,
  },

  tableHeader: {
  color: '#68F9A5',
  fontWeight: 'bold',
  flex: 1,
  textAlign: 'center',
},

tableRow: {
  flexDirection: 'row',
  marginBottom: 8,
},

tableCell: {
  color: '#fff',
  flex: 1,
  textAlign: 'center',
},
});
