import { React, useState} from "react";
import SearchBar from "../components/SearchBar";
import { Text, View, StyleSheet, ScrollView } from "react-native"
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

// const SearchScreen = ({ navigation }) => {
   // console.log(props)

  const SearchScreen = () => {

  const [term, setTerm] = useState("");
  const [results, searchApi, errorMessage] = useResults()

const filterResultByPrice = price => results.filter(result => result.price === price)

filterResultByPrice()

  return (
    <>
    {/* <View style={{flex: 1}}> NB: this will give the same experience as though it is the same as empty tag above */}
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      {/* <ResultsList results={filterResultByPrice('$')} title='Cost Effective' navigation={navigation} />
      <ResultsList results={filterResultByPrice('$$')} title='Big pricier' navigation={navigation} />
      <ResultsList results={filterResultByPrice('$$$')} title='Big Spender' navigation={navigation} /> */}
      {/* NB: we use 'withNavigation' components in the 'ResultsList' to achive the same result as shown above */}
      <ResultsList results={filterResultByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultByPrice('$$')} title='Big pricier' />
      <ResultsList results={filterResultByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
