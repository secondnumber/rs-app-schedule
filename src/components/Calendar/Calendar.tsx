import React, { useEffect } from 'react';
import './Calendar.less';
import { connect } from 'react-redux';
import { loadData } from './actions';
import { bindActionCreators } from 'redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';
import MiniCalendar from './antDesign/antDesignMiniCalendar';
import useWindowDimensions from '../../utils/useWindowDimensions';

function Calendar({ fetchedData, loadData }) {
  const { width } = useWindowDimensions();
  useEffect(() => {
    loadData();
  }, []);

  if (fetchedData.length === 0) {
    return <Loader />;
  } else if (width > 750) {
    return <AntDesignCalendar props={fetchedData} />;
  } else {
    return <MiniCalendar props={fetchedData} />;
  }
}

const mapStateToProps = (state: { CalendarPageReducer: { fetchedData: any; modalWindowData: any; }; }) => {
  return {
    fetchedData: state.CalendarPageReducer.fetchedData,
    modalWindowData: state.CalendarPageReducer.modalWindowData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: bindActionCreators(loadData, dispatch),
  };
};
const WrappedCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default WrappedCalendar;
