// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {isChannelReadOnlyById} from 'mattermost-redux/selectors/entities/channels';
import {getCurrentTeamId} from 'mattermost-redux/selectors/entities/teams';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import RhsRootPost from './rhs_root_post.jsx';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);
    const enableEmojiPicker = config.EnableEmojiPicker === 'true';
    const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
    const teamId = ownProps.teamId || getCurrentTeamId(state);

    return {
        enableEmojiPicker,
        enablePostUsernameOverride,
        isReadOnly: isChannelReadOnlyById(state, ownProps.post.channel_id),
        teamId,
        pluginPostTypes: state.plugins.postTypes,
        isArchived: true, // TODO: Get this value from Redux.
    };
}

export default connect(mapStateToProps)(RhsRootPost);
