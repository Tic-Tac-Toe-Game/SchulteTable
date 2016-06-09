import React from 'react';
import { connect } from 'react-redux'

import Application from 'st/components/application';
import events from 'st/constants/application';

function SourceApplication(props) {
    return <Application />;
}

function mapStateToProps({ index }, { size }) {
    return { index, size }
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