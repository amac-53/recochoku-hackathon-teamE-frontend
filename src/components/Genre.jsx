import React from "react";
import Form from "react-bootstrap/Form";

const Genre = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="Select">ジャンル</Form.Label>
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ポップ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"シンガーソングライター"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"ロック"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"パンク・メロコア・ハードコア"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"オルタナティブ"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ギターロック"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ハードロック・ヘビーメタル"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ミクスチャー"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ダンス・エレクトロ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ヒップホップ・ラップ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"R&B"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"レゲエ"} />
          </div>
        ))}
      </Form.Group>
    </>
  );
};

export default Genre;
