import * as S from './booking-modal.styled';

import { ConnectedProps, connect } from 'react-redux';
import { FormEvent, useRef, useState } from 'react';

import { APIRoute } from 'const';
import { BookingData } from 'types/booking-data';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { api } from 'services/api';

const mapDispatchToProps = () => ({
  onSubmit(bookingData: BookingData, setModalClosed: () => void) {
    api.post<BookingData>(APIRoute.Orders, bookingData);
    setModalClosed();
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function BookingModal(props: PropsFromRedux): JSX.Element {
  const {onSubmit} = props;

  const [isBookingModalClosed, setIsBookingModalClosed] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const peopleCountRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const isLegalRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (nameRef.current !== null && peopleCountRef.current !== null && phoneRef.current !== null && isLegalRef.current !== null) {
      onSubmit({
        name: nameRef.current.value,
        peopleCount: Number(peopleCountRef.current.value),
        phone: phoneRef.current.value,
        isLegal: Boolean(isLegalRef.current.value),
      },
      () => setIsBookingModalClosed(true));
    }
  };

  if (isBookingModalClosed) {
    return <> </>
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={() => {
            setIsBookingModalClosed(true);
          }}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              ref={nameRef}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              pattern="^[0-9]+$"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              minLength="10"
              maxLength="10"
              required
              ref={phoneRef}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              ref={peopleCountRef}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              ref={isLegalRef}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
}

export {BookingModal};
export default connector(BookingModal);
