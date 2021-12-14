import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { useDispatch } from "react-redux";
import { setSelectedCard, SET_SELECTED_CARD } from "../actions/UserActions";

const useSelectedCard = (uid) => {
  const [selected, setSelected] = useState("");
  const [cardLoad, setCardLoad] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (selectedOption) => {
    const { value } = selectedOption;

    if (value === "addNew") {
      setSelected(selectedOption);
      setAddNew(true);
      setCardLoad(true);
    } else {
      setSelected(selectedOption);
      setAddNew(false);
      setCardLoad(true);
    }
  };

  useEffect(() => {
    const userData = async () => {
      const userInfo = await db.collection("users").doc(uid).get();
      if (userInfo.exists) {
        const { default_source } = userInfo.data();

        setSelected(default_source);
      }
    };
    userData();
    setCardLoad(true);
  }, [uid]);
  console.log("SELECTED", selected);
  return { selected, cardLoad, handleChange, addNew };
};

export default useSelectedCard;
