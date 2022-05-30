import { FunctionComponent, useState } from 'react';
import { TextInput, View } from 'react-native';

import styles from './CommentInput.styles';

export interface CommentInputProps {
  placeholder?: string;
  onSubmit: (text: string) => void;
}

export const CommentInput: FunctionComponent<CommentInputProps> = ({
  placeholder = '',
  onSubmit,
}) => {
  const [text, setText] = useState('');

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleSubmitEditing = () => {
    if (!text) return;

    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};
