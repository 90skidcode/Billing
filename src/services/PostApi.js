import axios from "axios";
import { UtilsJson } from "../utils/UtilsJson";
import { useLocation } from 'react-router-dom';
async function PostApi(data, page, props) {
    if (props) {
        props.setPageLoaderCounter(props.pageLoaderCounter + 1);
        props.setPageLoader(false);
    }

    let responcePostData = [];
    let loadingPost = true;
    let errorPost = null;
    try {
        let axiosConfig = {};
        if (page != 'login') {
            let data = JSON.parse(sessionStorage.getItem('details'));
            axiosConfig = {
                headers: {
                    AuthCode: data[0].pos_user_sk,
                    AuthBranch: data[0].pos_user_branch,
                    AuthUser: data[0].pos_user_code
                }
            }
        };
        await axios
            .post(UtilsJson.baseUrl, data, axiosConfig)
            .then((response) => {
                responcePostData = response;
                if (props) {
                    props.setPageLoaderCheckCounter(props.pageLoaderCheckCounter + 1);
                    (props.pageLoaderCheckCounter == props.pageLoaderCounter) ? props.setPageLoader(true): props.setPageLoader(false);
                }
            })
            .catch((err) => {
                errorPost = err;
                if (props) {
                    props.setPageLoaderCheckCounter(props.pageLoaderCheckCounter + 1);
                    (props.pageLoaderCheckCounter == props.pageLoaderCounter) ? props.setPageLoader(true): props.setPageLoader(false);
                }
            })
            .finally(() => {
                loadingPost = false;
            });
    } catch (e) {
        errorPost = e;
    }

    return { responcePostData, loadingPost, errorPost };
}

export default PostApi;