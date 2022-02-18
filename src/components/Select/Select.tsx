import React from 'react';
import {ChevronDown} from '@components/icons/chevronDown';
import {ChevronUp} from '@components/icons/chevronUp';
import {Container, Spacer, styled, Text} from '@nextui-org/react';
import {useSelect} from 'downshift';
import {MenuItem} from './MenuItem';
import {darkTheme} from 'styles/next-theme';
import {motion} from 'framer-motion';

type Item = {
  value: string;
  name: string;
};

type SelectProps = {
  items: Item[];
  label: string;
  handleSelectedItemChange: React.Dispatch<React.SetStateAction<string>>;
};

const ItemsContainer = styled(motion.ul, {
  all: 'none',
  boxShadow: '$md',
  borderRadius: '$md',
  overflow: 'hidden',
  outline: 'none',
  width: '100%',
  position: 'absolute',
  background: 'Field',
  top: 70,
  left: -20,
  zIndex: '$4',
  [`.${darkTheme} &`]: {
    backgroundColor: '$gray900',
  },
});

const Button = styled(motion.button, {
  border: 'none',
  borderRadius: '$md',
  padding: '$0 $6',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$xs',

  '&:focus-visible': {
    transition: '400ms all',
    boxShadow: 'inset 0 0 0 2px field, 0 0 0px 2px $colors$secondary',
  },

  [`.${darkTheme} &`]: {
    backgroundColor: '$gray900',
  },
});

export const Select = (props: SelectProps) => {
  const {handleSelectedItemChange, items, label} = props;
  const itemToString = (item: Item | null) => (item ? item.value : '');
  const {
    isOpen,
    getLabelProps,
    getToggleButtonProps,
    selectedItem,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
    onSelectedItemChange: (e) =>
      handleSelectedItemChange(e.selectedItem!.value),
  });

  return (
    <Container
      gap={0}
      display="flex"
      direction="column"
      alignItems="stretch"
      css={{position: 'relative'}}
    >
      <label {...getLabelProps()}>
        <Text as="span" size={12} css={{ml: '10px'}}>
          {label}
        </Text>
      </label>
      <Spacer y={0.3} />
      <Button {...getToggleButtonProps()}>
        <span>{selectedItem?.name || items[0].name}</span>{' '}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </Button>
      <ItemsContainer
        {...getMenuProps()}
        animate={{}}
        css={{border: isOpen ? '2px solid $border' : ''}}
      >
        {isOpen &&
          items.map((item, index) => (
            <MenuItem
              css={
                highlightedIndex === index
                  ? {backgroundColor: '$primaryLight'}
                  : {}
              }
              key={`${item.value}${index}`}
              {...getItemProps({item, index})}
            >
              {item.name}
            </MenuItem>
          ))}
      </ItemsContainer>
    </Container>
  );
};
