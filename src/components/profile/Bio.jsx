import { useState } from "react";
import { actions } from "../../actions";
import CheckIcon from "../../assets/icons/check.svg";
import EditIcon from "../../assets/icons/edit.svg";
import useApi from "../../hooks/useApi";
import useProfile from "../../hooks/useProfile";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL; // base url

export default function Bio() {
  const { state, dispatch } = useProfile();
  const { api } = useApi();
  const [editMode, setEditMode] = useState(false); // edit mode on/ off state
  const [bio, setBio] = useState(state?.user?.bio);

  //  Bio editing handler
  const handleBioEdit = async () => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
      // loading will be true before data fetching starts
    });

    try {
      // patch api to update bio
      const response = await api.patch(
        `${baseUrl}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        // after succesful response
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          payload: response?.data,
        });
      }
      setEditMode(false); // edit mode off
    } catch (err) {
      dispatch({
        type: actions.profile.DATA_FETCHING_ERROR,
        error: err.message,
      });
    }
  };
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          // Show the bio when you are not editing the bio
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          // Editing mode to edit the bio
          <textarea
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md"
            name=""
            id=""
            cols="55"
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)} // edit mode on
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}
        >
          <img src={CheckIcon} alt="Check" />
        </button>
      )}
    </div>
  );
}
