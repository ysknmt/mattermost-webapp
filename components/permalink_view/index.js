// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentChannel} from 'mattermost-redux/selectors/entities/channels';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import PermalinkView from './permalink_view.jsx';

function mapStateToProps(state) {
    const team = getCurrentTeam(state);
    const channel = getCurrentChannel(state);
    let channelId = '';
    let channelName = '';
    let channelDeleteAt;
    if (channel) {
        channelId = channel.id;
        channelName = channel.name;
        channelDeleteAt = channel.deleteAt;
    }

    let teamName = '';
    if (team) {
        teamName = team.name;
    }

    return {
        channelId,
        channelName,
        teamName,
        channelDeleteAt,
    };
}

export default connect(mapStateToProps)(PermalinkView);
