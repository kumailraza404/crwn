import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {compose} from "redux"

import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
    //using isLoading variable because WithSpinner expects the variable isLoading

})

//export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
//the above commented code is the same as the one below(just a different way of writing it so it looks easier to read)
const CollectionsOverviewContainer = compose(
connect(mapStateToProps),WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
