import { React, useState} from "react";
import SearchBar from "../components/SearchBar";
import { Text, View, StyleSheet, ScrollView } from "react-native"
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMessage] = useResults()

const filterResultByPrice = price => results.filter(result => result.price === price)

filterResultByPrice()

  return (
    <View style={{flex: 1}}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
      <ResultsList results={filterResultByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultByPrice('$$')} title='Big pricier'/>
      <ResultsList results={filterResultByPrice('$$$')} title='Big Spender'/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
