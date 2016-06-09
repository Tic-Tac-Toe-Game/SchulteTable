import React from 'react';
import { connect } from 'react-redux'

import Application from 'st/components/application';
import events from 'st/constants/application';

function SourceApplication(props) {
    return <Application {...props} />;
}

function mapStateToProps({ index, sequence }, { size }) {
    return { index, size, sequence }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (index) => {
            dispatch({
                type: events.CLICK,
                index
            });
        }
    }
}

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(SourceApplication);

export default ApplicationConnect;