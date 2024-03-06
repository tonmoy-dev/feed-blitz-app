import { useRef } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import useApi from "../../hooks/useApi";
import useProfile from "../../hooks/useProfile";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL; // base url

export default function ProfileImage() {
  const { state, dispatch } = useProfile();

  const { api } = useApi();
  const fileUploadRef = useRef(); // using ref for input element

  // updating the profile image
  const updateImageDisplay = async () => {
    // console.dir(fileUploadRef.current);
    dispatch({
      type: actions.profile.DATA_FETCHING,
      // loading will be true before data fetching starts
    });

    try {
      // creating a form data object
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        // console.log(file);
        formData.append("avatar", file); // add a key-value pair to formData obj
      }

      // post api call to update the image in user data
      const response = await api.post(
        `${baseUrl}/profile/${state?.user?.id}/avatar`,
        formData
      );
      // console.log(response.data);

      if (response.status === 200) {
        // If response is successful then...
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          payload: response?.data,
        });
      }
    } catch (err) {
      dispatch({
        type: actions.profile.DATA_FETCHING_ERROR,
        error: err.message,
      });
    }
  };

  // image upload handler
  const handleImageUpload = (e) => {
    e.preventDefault();
    // This handler will be called for submit button's click event, after that input element's change and click events will be called after that.

    // an eventListener to listen change event for the input [type: file] element
    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click(); // click method call for that input element
  };
  const fullName = `${state?.user?.firstName} ${state?.user?.lastName}`;

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full h-48 rounded-full"
        src={`${baseUrl}/${state?.user?.avatar}`}
        alt={fullName}
      />
      <form>
        <button
          type="submit"
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          onClick={handleImageUpload}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input type="file" ref={fileUploadRef} name="" id="file" hidden />
        {/* This input element is read-only, only works while performing any event. We don't want to show this input field to the UI */}
      </form>
    </div>
  );
}
