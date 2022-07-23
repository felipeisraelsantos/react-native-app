import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import { ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '456',
      patrimony: '123456',
      when: '18/07/2022 às 14:00',
      status: 'open'
    }
  ]);

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      {/* Icones e logo */}
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
      <Logo />
      <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      {/* texto e numero de chamados */}
      <VStack flex={1} px={6}>
        <HStack 
          w="full" 
          mt={8} 
          mb={4} 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Heading color="gray.100">
            Meus Chamados
          </Heading>

          <Text color="gray.200">
            3
          </Text>
        </HStack> 

        {/* Filtro de chamados */}
        <HStack space={3} mb={8}>
          <Filter
            type='open'
            title='em Andmento'
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type='closed'
            title='Finalizados'
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={
            ( {item} ) => <Order data={item} onPress={ () => handleOpenDetails(item.id) } 
          />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:100}}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova Solicitação" onPress={handleNewOrder} />

      </VStack>
    </VStack>
  );
}