import React, {useEffect, useState} from 'react';
import { TagsInput } from "react-tag-input-component";



const ReactTagsInput =()=> {

  const [tags, setTags] = useState(["Tooth cleaning"]);
  const [suggestions ,setSuggestions] = useState(["Children Care"]);


        return (
            <div>

                  <TagsInput
                  tags={tags}
                  suggestions={suggestions}
                  value={tags}
                  placeHolder="Press enter to add new tag"
                />
            </div>
        )
    }

 
export default ReactTagsInput;