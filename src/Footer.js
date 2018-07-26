import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           	<footer id="footer">
				<div className="inner">
					<ul className="copyright">
						<li>&copy; Cache</li><li><a href="http://jamestfang.com">About James</a></li>
					</ul>
				</div>
			</footer>
        );
    }
}

export default Footer;