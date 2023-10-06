import React, { useState, useEffect, useCallback } from "react";
import { SearchBar } from "./SearchBar/searchBar";
import { AppContainer } from "./AppStyle";
import { Modal } from "./Modal/modal";
import { Loader } from 'components/Loader/loader';
import { Button } from "./Button/button";
import { fetchPhoto } from "service/api";
import { ImageGalleryItem } from "./ImageGalleryItem/imageGalleryItem";
import { ImageGallery } from "./ImageGallery/imageGallery";


export function App() {
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openModalData, setOpenModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  // state = {
  //   searchText: null,
  //   search: null,
  //   modal: {
  //     isOpen: false,
  //     data: null,
  //   },
  //   isLoading: false,
  //   error: null,
  //   page: 1,
  //   total: null,
  // }

  const handleFormSubmit = Search => {
    setSearchText(Search);
    // this.setState({ searchText: Search });
  }

  const fetchSearchPhoto = useCallback(async (searchQuery, pageNum) => {
    try {
      setIsLoading(true);
      const { hits, total } = await fetchPhoto(searchQuery, pageNum);
      setSearch(hits);
      setTotal(total);
      // this.setState({ isLoading: true });
      // const { hits, total } = await fetchPhoto(this.state.searchText, 1);
      // this.setState({
      //   search: hits,
      //   page: 1,
      //   total: total,
      // });
    } catch (error) {
      setError(error.message);
      // this.setState({ error: error.message });
    } finally {
      setIsLoading(false);
      // this.setState({ isLoading: false });

    }
  }, [])

  const loadMore = async () => {
    try {
      let nextPage = page + 1;
      const { hits } = await fetchPhoto(searchText, nextPage);
      setSearch(prevState =>
        [...prevState, ...hits]
      );
      setPage(nextPage);
      setIsLoading(true);

      // let nextPage = this.state.page + 1;
      // const { hits } = await fetchPhoto(this.state.searchText, nextPage);
      // this.setState(prevState => {
      //   return {
      //     search: [...prevState.search, ...hits],
      //     page: nextPage,
      //     isLoading: true,
      //   }
      // })
    } catch (error) {
      setError(error.message);
      // this.setState({ error: error.message });
    } finally {
      setIsLoading(false);
      // this.setState({ isLoading: false });
    }
  }

  useEffect(() => {
    if (searchText === '' || page !== 1) {
      return;
    }
    fetchSearchPhoto(searchText, page);
  }, [searchText, page, fetchSearchPhoto]);

  // componentDidUpdate(_, prevState) {
  //   if (prevState.searchText !== this.state.searchText) {
  //     this.fetchSearchPhoto();
  //   }
  // }



  const onOpenModal = (modalData) => {
    setIsOpenModal(true);
    setOpenModalData(modalData);
    // this.setState({
    //   modal: {
    //     isOpen: true,
    //     data: modalData,
    //   },
    // });
  }

  const onCloseModal = () => {
    setIsOpenModal(false);
    setOpenModalData(null);
    // this.setState({
    //   modal: {
    //     isOpen: false,
    //     data: null,
    //   },
    // });
  }





  const showPost = Array.isArray(search) && search.length;
  console.log(showPost);
  let maxPage = total / 12;
  return (
    <AppContainer>
      <SearchBar handleFormSubmit={handleFormSubmit}></SearchBar>

      <ImageGallery>
        {error && <p>{error}</p>}
        {showPost > 0 && search.map(photo => {
          return (
            <ImageGalleryItem onOpenModal={onOpenModal}
              key={photo.id}
              webformatURL={photo.webformatURL}
              largeImageURL={photo.largeImageURL}
            />
          );
        })
        }
      </ImageGallery>
      {isLoading && (
        <Loader />)}
      {showPost > 0 && page <= maxPage &&
        <Button onloadMore={loadMore} />
      }

      {isOpenModal && <Modal
        largeImageURL={openModalData}
        onCloseModal={onCloseModal} />}
    </AppContainer>


  );
};

