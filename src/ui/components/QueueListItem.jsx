import AlbumArt from './AlbumArt';

import React from 'react/addons';
import { Cursor }  from 'react-cursor';
import ImmutableMixin from './mixins/ImmutableMixin';

class QueueListItem extends ImmutableMixin {

	render () {

		var track = this.props.item.value;

		return (
			<li onDoubleClick={this._onDoubleClick.bind(this)} data-position={this.props.position}>
				<AlbumArt id="" src={track.albumArtURI} />
				<div className="trackinfo">
					<p className="title">{track.title}</p>
					<p className="artist">{track.creator}</p>
				</div>
			</li>
		);
	}

	_onDoubleClick () {
		this.trigger('queuelist:goto', this.props.position);
	}
}

QueueListItem.propTypes = {
	item: React.PropTypes.instanceOf(Cursor).isRequired
};
export default QueueListItem;