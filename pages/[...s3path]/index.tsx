import { withRouter } from "next/router";
import Head from "next/head";
import React from "react";

import type { WithRouterProps } from "next/dist/client/with-router";

interface IndexState {
    isLoading: boolean;
    paths: string[];
}

class S3BucketViewer extends React.Component<WithRouterProps, IndexState> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            paths: [],
        };
    }

    async componentDidMount() {
        console.info(window.location.href);
    }

    render() {
        const params = this.props.router.query;
        console.info(this.props.router);
        console.info(params.s3path);
        return (
            <React.Fragment>
                <Head>
                    <title>S3 Bucket Viewer</title>
                    <meta name="description" content="A simple S3 Bucket viewer" />
                </Head>
                <main className="py-4 px-6">
                    <h1 className="text-2xl font-bold mb-4">S3 Bucket Viewer - {}</h1>
                </main>
            </React.Fragment>
        );
    }
}

export default withRouter(S3BucketViewer);
